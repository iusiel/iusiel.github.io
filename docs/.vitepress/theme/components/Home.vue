<script>
export default {
    name: "Home",

    data: function () {
        return {
            showingSummary: false,
            projectBeingShown: "",
        };
    },

    methods: {
        showProject(project) {
            this.projectBeingShown = project;
            // document.getElementById("home-about-me").style.display = "none";
            document
                .querySelectorAll(".home__project.to-animate")
                .forEach((element) => {
                    element.style.opacity = 0;
                    const randomX =
                        this.getWindowWidth() > 767
                            ? this.getRandomArbitrary(-100, 100)
                            : 0;
                    const randomY = this.getRandomArbitrary(-100, 100);
                    element.style.transform = `translate(${randomX}px, ${randomY}px)`;

                    setTimeout(() => {
                        document.querySelector(
                            ".home__projects"
                        ).style.display = "none";

                        this.showingSummary = true;
                    }, 400);
                });
        },

        showAllProjects() {
            this.showingSummary = false;
            document.querySelector(".home__projects").style.display = null;
            document.getElementById("home-about-me").style.display = null;

            setTimeout(() => {
                document
                    .querySelectorAll(".home__project.to-animate")
                    .forEach((element) => {
                        element.style.opacity = null;
                        element.style.transform = null;
                    });
            }, 100);
        },

        getWindowWidth() {
            try {
                return document.body.clientWidth;
            } catch (error) {
                return 0;
            }
        },

        getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        },
    },
};
</script>

<template>
    <div>
        <div class="container">
            <h2 style="text-align: center">SOME OF MY PROJECTS</h2>
            <div class="home__projects">
                <div
                    v-for="project in $frontmatter.projects"
                    v-bind:key="project.title"
                    class="home__project to-animate"
                    v-bind:ref="project.title"
                >
                    <div
                        @click="showProject(project)"
                        @keypress.enter="showProject(project)"
                        class="home__project-button"
                        tabindex="0"
                        role="button"
                    >
                        <h2>{{ project.title }}</h2>
                        <h3
                            v-if="project.tagline"
                            class="home__project-tagline"
                        >
                            {{ project.tagline }}
                        </h3>
                    </div>
                </div>
            </div>

            <div v-if="showingSummary" class="home__project-summary-container">
                <h2 class="home__project-summary-title">
                    {{ projectBeingShown.title }}
                </h2>

                <div class="home__project-details">
                    <div class="home__project-details-tech-stack">
                        <a
                            v-for="(
                                link, index
                            ) in projectBeingShown.projectLinks"
                            v-bind:key="index"
                            v-bind:href="link"
                            class="home__project-link"
                            >{{ link }}</a
                        >

                        <h4 v-if="projectBeingShown.techStackUsed.length > 0">
                            Made using:
                        </h4>
                        <ul v-if="projectBeingShown.techStackUsed.length > 0">
                            <li
                                v-for="(
                                    stack, index
                                ) in projectBeingShown.techStackUsed"
                                v-bind:key="index"
                            >
                                {{ stack }}
                            </li>
                        </ul>
                    </div>
                    <div class="home__project-details-summary">
                        <picture v-if="projectBeingShown.image">
                            <source
                                v-bind:srcset="`${projectBeingShown.image.src.substr(
                                    0,
                                    projectBeingShown.image.src.lastIndexOf('.')
                                )}.webp`"
                                type="image/webp"
                            />
                            <img
                                width="750"
                                height="500"
                                v-bind:src="projectBeingShown.image.src"
                                v-bind:alt="projectBeingShown.image.alt"
                            />
                        </picture>
                        <div v-html="projectBeingShown.summary"></div>
                    </div>
                </div>

                <div style="text-align: center">
                    <button
                        @click="showAllProjects"
                        class="home__back-to-projects"
                        tabindex="0"
                    >
                        SHOW ALL
                    </button>
                </div>
            </div>
        </div>

        <div id="home-about-me">
            <h1 style="text-align: center">ABOUT ME</h1>
            <p class="home__about-me">
                I am a web developer who mainly uses PHP. I prefer to use
                Laravel and Vue when creating my own projects. I have also
                started using Symfony to complement my PHP knowledge. I also
                dabbled a bit with Jamstack. I have used VitePress and Astro. I
                like them both and I would like to use them more often in my
                future projects. To keep my skills and knowledge up to date, I
                listen to podcasts related to web development.

                <br /><br />
                When I am not doing web development things, I like to play
                games. Some of the games that I play are WRC Generations, Euro
                Truck Simulator 2, and Muramasa Rebirth. I also run regularly.
                Right now, I am just aiming to keep my weekly mileage at about
                100km per week. I also try to improve my critical thinking by
                learning about various logical fallacies and logical biases.
            </p>
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
        </div>
    </div>
</template>
