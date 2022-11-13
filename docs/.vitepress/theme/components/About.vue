<script>
export default {
    name: "About",
};
</script>

<template>
    <div>
        <h1 style="text-align: center">ABOUT ME</h1>
        <div
            v-if="$frontmatter.skills.length > 0"
            class="about__skills-container"
        >
            <div
                v-for="(skill, index) in $frontmatter.skills"
                v-bind:key="index"
                class="about__skill"
            >
                {{ skill }}
            </div>
        </div>
        <p>
            I am a web developer that likes to use Laravel for my projects. I
            mostly use PHP as my backend language. I have also used WordPress,
            Drupal, and Magento2 in the past, but my knowledge here is not
            updated since I don't regularly use them. To keep my skills and
            knowledge up to date, I listen to podcasts related to web
            development. I also check some roadmaps that other web developers
            have created. You can check my Github page
            <a target="_blank" href="https://github.com/iusiel"
                >https://github.com/iusiel</a
            >
            to learn about various projects I do during my free time.
        </p>

        <h2>When I am not doing projects</h2>
        <p>
            I like to play games when I am not doing anything related to web
            development. Right now, I mostly play Stardew Valley, Euro Truck
            Simulator 2 and Dirt Rally 2.0. I also like to improve my critical
            thinking by learning about various logical fallacies and logical
            biases. I try to keep up with local and international news to have
            an informed opinion.
        </p>

        <h2>You want to work with me?</h2>
        <p>
            You can email me at
            <a href="mailto:iusiel@outlook.com">iusiel@outlook.com</a>
        </p>

        <h2>What is next for me?</h2>
        <p>Some ideas that I have for my next projects are:</p>
        <ul>
            <li>
                Sports league website. I was inspired to try and create this one
                since I play OOTP sometimes.
            </li>
            <li>
                Warranty reminder. I think I am going to try either Flutter or
                React Native for this one.
            </li>
            <li>Storybook interface.</li>
        </ul>
    </div>
</template>
