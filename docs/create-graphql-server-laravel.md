---
title: Creating GraphQL server from Laravel app
meta:
  - name: description
    content: Creating GraphQL server using https://github.com/rebing/graphql-laravel
  - property: og:image
    content: /images/logo.jpg
  - property: og:type
    content: website
activeLink: random
post:
  title: Creating GraphQL server from Laravel app
  formattedDate: November 1, 2022
  date: 2022-11-01
---

<script setup>
import BlogPost from './.vitepress/theme/components/BlogPost.vue'
import './.vitepress/styles/codeblock.styl';
</script>

<BlogPost>

  <div>

This is a simple guide on how to create a GraphQL server from a Laravel application. I will be using [Laravel-GraphQL](https://github.com/rebing/graphql-laravel) for this one.

First, you need to install the package via composer.

```shell
composer require rebing/graphql-laravel
```

After installing the package, you need to publish the configuration file. You can do it via

```shell
php artisan vendor:publish --provider="Rebing\GraphQL\GraphQLServiceProvider"
```

After publishing the configuration file, you can now start by creating a type class.

```php
<?php
// app/GraphQL/Types/UserType.php
namespace App\GraphQL\Types;

use App\User;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class UserType extends GraphQLType
{
    protected $attributes = [
        'name'          => 'User',
        'description'   => 'A user',
        // Note: only necessary if you use `SelectFields`
        'model'         => User::class,
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The id of the user',
                // Use 'alias', if the database column is different from the type name.
                // This is supported for discrete values as well as relations.
                // - you can also use `DB::raw()` to solve more complex issues
                // - or a callback returning the value (string or `DB::raw()` result)
                'alias' => 'user_id',
            ],
            'email' => [
                'type' => Type::string(),
                'description' => 'The email of user',
                'resolve' => function($root, array $args) {
                    // If you want to resolve the field yourself,
                    // it can be done here
                    return strtolower($root->email);
                }
            ],
            // Uses the 'getIsMeAttribute' function on our custom User model
            'isMe' => [
                'type' => Type::boolean(),
                'description' => 'True, if the queried user is the current user',
                'selectable' => false, // Does not try to query this from the database
            ]
        ];
    }

    // You can also resolve a field by declaring a method in the class
    // with the following format resolve[FIELD_NAME]Field()
    protected function resolveEmailField($root, array $args)
    {
        return strtolower($root->email);
    }
}
```

After creating the type class, you can add the type via `config/graphql.php`

```
'schemas' => [
    'default' => [
        // ...

        'types' => [
            App\GraphQL\Types\UserType::class,
        ],
```

After adding the type class to the config file, create a query class.

```php
<?php
// app/GraphQL/Queries/UsersQuery.php

namespace App\GraphQL\Queries;

use Closure;
use App\User;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;

class UsersQuery extends Query
{
    protected $attributes = [
        'name' => 'users',
    ];

    public function type(): Type
    {
        return Type::nonNull(Type::listOf(Type::nonNull(GraphQL::type('User'))));
    }

    public function args(): array
    {
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::string(),
            ],
            'email' => [
                'name' => 'email',
                'type' => Type::string(),
            ]
        ];
    }

    public function resolve($root, array $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        if (isset($args['id'])) {
            return User::where('id' , $args['id'])->get();
        }

        if (isset($args['email'])) {
            return User::where('email', $args['email'])->get();
        }

        return User::all();
    }
}
```

Add the query to `config/graphql.php`

```php
'schemas' => [
    'default' => [
        'query' => [
            App\GraphQL\Queries\UsersQuery::class
        ],
        // ...
    ]
]
```

To check if the query is working, you can visit **/graphiql** and use the following query:

```graphql
query FetchUsers {
  users {
    id
    email
  }
}
```

For more information about creating a graphl query, you can check [https://github.com/rebing/graphql-laravel#creating-a-query](https://github.com/rebing/graphql-laravel#creating-a-query)

  </div>
</BlogPost>
