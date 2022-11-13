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
            document.querySelector(".home__projects").style.display = "none";
            this.showingSummary = true;
          }, 400);
        });
    },

    showAllProjects() {
      this.showingSummary = false;
      document.querySelector(".home__projects").style.display = null;
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
    <h1 style="text-align: center">SOME OF MY PROJECTS</h1>
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
          <h3 v-if="project.tagline" class="home__project-tagline">
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
            v-for="(link, index) in projectBeingShown.projectLinks"
            v-bind:key="index"
            v-bind:href="link"
            class="home__project-link"
            >{{ link }}</a
          >

          <h4 v-if="projectBeingShown.techStackUsed.length > 0">Made using:</h4>
          <ul v-if="projectBeingShown.techStackUsed.length > 0">
            <li
              v-for="(stack, index) in projectBeingShown.techStackUsed"
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
          GO BACK
        </button>
      </div>
    </div>
  </div>
</template>
