<template>
  <div>
    <section class="image-slider-section">
      <div class="image-slider-container" :style="sliderTransform">
        <img v-for="(image, index) in extendedPictureSlides" :key="index" :src="image" alt="Sliding image"
          class="slider-image" />
      </div>
    </section>
  </div>
</template>

<script>
import pic1 from '/images/20241231_115403.jpg'
import pic2 from '/images/20241231_115411.jpg'
import pic3 from '/images/20241231_115426.jpg'
import pic4 from '/images/20250116_113830.jpg'
import pic5 from '/images/20250116_113928.jpg'
import pic6 from '/images/20250417_125415.jpg'
import pic7 from '/images/20250417_125418.jpg'
import pic8 from '/images/20250417_130235.jpg'

export default {
  data() {
    return {
      // We'll manage an internal index that goes beyond the original array length
      internalImageIndex: 0,
      pictureSlides: [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
        pic8
      ],
      numImagesPerRow: 4,
      // How many images to duplicate at each end for a smooth transition
      // We need at least 'numImagesPerRow' images duplicated at the end to slide smoothly.
      // And we need at least 'numImagesPerRow' at the beginning to handle the 'jump back'.
      duplicateCount: 4, // Make this at least equal to numImagesPerRow
      slideInterval: null
    }
  },
  computed: {
    // This array will contain duplicates for infinite scrolling
    extendedPictureSlides() {
      const original = this.pictureSlides;
      const firstFew = original.slice(0, this.duplicateCount);
      const lastFew = original.slice(original.length - this.duplicateCount);
      return [...lastFew, ...original, ...firstFew];
    },
    // Calculate the transform for the slider container
    sliderTransform() {
      // Calculate the offset based on the internal index
      // The internal index will range from 0 to (original.length + 2 * duplicateCount - 1)
      const offset = this.internalImageIndex;
      // Each image takes 100% / numImagesPerRow width
      const translateXValue = -offset * (100 / this.numImagesPerRow);
      return {
        transform: `translateX(${translateXValue}%)`,
        // Add transition only when not "jumping" back
        transition: this.internalImageIndex === this.duplicateCount && this.internalImageIndex === this.pictureSlides.length + this.duplicateCount ? 'none' : 'transform 1s ease-in-out'
      };
    }
  },
  mounted() {
    this.startSlideShow();
    // Initialize the internal index to show the first set of real images
    this.internalImageIndex = this.duplicateCount;
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
  },
  methods: {
    startSlideShow() {
      this.slideInterval = setInterval(() => {
        this.internalImageIndex++;

        // If we've slid past the original images into the duplicated ones at the end
        if (this.internalImageIndex >= this.pictureSlides.length + this.duplicateCount) {
          // Immediately jump back to the start of the original images (after the initial duplicated ones)
          // Temporarily disable transition for the jump
          const container = this.$el.querySelector('.image-slider-container');
          if (container) {
            container.style.transition = 'none';
          }
          this.internalImageIndex = this.duplicateCount;
          // Force a reflow to apply the `transition: none` before re-enabling it
          void container.offsetWidth; // eslint-disable-line no-unused-expressions
          if (container) {
            // Re-enable transition for the next actual slide
            container.style.transition = 'transform 1s ease-in-out';
          }
        }
      }, 3000); // Change image every 3 seconds
    }
  }
}
</script>

<style scoped>
.image-slider-section {
  height: 30vh;
  overflow: hidden;
  position: relative;
}

.image-slider-container {
  display: flex;
  height: 100%;
  /* Transition is handled dynamically in `sliderTransform` */
}

.slider-image {
  /* Each image takes a portion of the container's width,
     so that 'numImagesPerRow' images are visible at a time.
     The total width of the container will be (total number of images in extendedPictureSlides) * (100% / numImagesPerRow)
  */
  width: calc(100% / 4);
  /* This still dictates how many are visible at once */
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
}
</style>
