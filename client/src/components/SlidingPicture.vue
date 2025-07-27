<template>
  <div class="z-[9999] bg-white">
    <section v-if="isMounted" class="image-slider-section py-4">
      <div class="image-slider-container" :style="sliderTransform">
        <img v-for="(image, index) in extendedPictureSlides" :key="index" :src="image" alt="Sliding image"
          class="slider-image" :style="imageStyle" />
      </div>
      <button class="slider-arrow left-arrow" @click="prevImage">&#9664;</button>
      <button class="slider-arrow right-arrow" @click="nextImage">&#9654;</button>
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
      internalImageIndex: 0,
      isMounted: false,
      pictureSlides: [
        pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8
      ],
      // Default value, will be updated on mount
      numImagesPerRow: 3,
      slideInterval: null,
      autoSlideDelay: 3000,
      shouldTransition: true,
    }
  },
  computed: {
    /**
     * The number of images to duplicate for the infinite scroll effect.
     * This is now tied to the number of visible images.
     */
    duplicateCount() {
      return this.numImagesPerRow;
    },
    /**
     * Dynamically calculates the width of each slider image.
     */
    imageStyle() {
      const width = `calc((100% / ${this.numImagesPerRow}) - 10px)`;
      return { width };
    },
    extendedPictureSlides() {
      const original = this.pictureSlides;
      const firstFew = original.slice(0, this.duplicateCount);
      const lastFew = original.slice(original.length - this.duplicateCount);
      return [...lastFew, ...original, ...firstFew];
    },
    sliderTransform() {
      const offset = this.internalImageIndex;
      const translateXValue = -offset * (100 / this.numImagesPerRow);
      return {
        transform: `translateX(${translateXValue}%)`,
        transition: this.shouldTransition ? 'transform 1s ease-in-out' : 'none'
      };
    }
  },
  watch: {
    // This watcher ensures smooth transitions when jumping from the last to the first slide.
    internalImageIndex(newVal, oldVal) {
      if (
        newVal === this.duplicateCount && oldVal > this.pictureSlides.length + this.duplicateCount - 1 ||
        newVal === this.pictureSlides.length + this.duplicateCount - 1 && oldVal < this.duplicateCount
      ) {
        this.shouldTransition = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.shouldTransition = true;
          }, 50);
        });
      } else {
        this.shouldTransition = true;
      }
    }
  },
  mounted() {
    this.isMounted = true;
    this.updateNumImagesPerRow();
    window.addEventListener('resize', this.updateNumImagesPerRow);

    this.shouldTransition = true;
    this.startSlideShow();
    // Initialize index based on the dynamic duplicateCount
    this.internalImageIndex = this.duplicateCount;
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
    window.removeEventListener('resize', this.updateNumImagesPerRow);
  },
  methods: {
    /**
     * Checks window width and updates the number of images to show.
     */
    updateNumImagesPerRow() {
      const width = window.innerWidth;
      //console.log(`Window width: ${width}`); // Debug line
      let newNumImages;

      if (width > 1024) { // Large screens
        newNumImages = 3;
      } else if (width > 768) { // Medium screens
        newNumImages = 2;
      } else { // Small screens
        newNumImages = 1;
      }

      if (newNumImages !== this.numImagesPerRow) {
        this.numImagesPerRow = newNumImages;
        // Reset the index to the new starting position to avoid visual glitches
        this.internalImageIndex = this.duplicateCount;
      }
    },
    startSlideShow() {
      this.slideInterval = setInterval(() => {
        this.nextImage(true);
      }, this.autoSlideDelay);
    },
    resetAutoSlide() {
      clearInterval(this.slideInterval);
      this.slideInterval = setTimeout(() => {
        this.startSlideShow();
      }, 5000);
    },
    nextImage(isAuto = false) {
      if (!isAuto) {
        this.resetAutoSlide();
      }

      this.internalImageIndex++;

      if (this.internalImageIndex >= this.pictureSlides.length + this.duplicateCount) {
        this.shouldTransition = false;
        this.internalImageIndex = this.duplicateCount;
        this.$nextTick(() => {
          setTimeout(() => {
            this.shouldTransition = true;
          }, 50);
        });
      }
    },
    prevImage() {
      this.resetAutoSlide();
      this.internalImageIndex--;

      if (this.internalImageIndex < this.duplicateCount) {
        this.shouldTransition = false;
        this.internalImageIndex = this.pictureSlides.length + this.duplicateCount - 1;
        this.$nextTick(() => {
          setTimeout(() => {
            this.shouldTransition = true;
          }, 50);
        });
      }
    }
  }
}
</script>

<style scoped>
.image-slider-section {
  height: 45vh;
  overflow: hidden;
  position: relative;
  width: 80%;
  margin: 0 auto;
}

.image-slider-container {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 30px;
}

.slider-image {
  /*
   * The width is now handled dynamically via a Vue inline style binding.
   * :style="imageStyle"
   */
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 10px;
  margin-right: 10px;
}

.slider-image:last-child {
  margin-right: 0;
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 24px;
  z-index: 10;
  border-radius: 5px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.slider-arrow:hover {
  opacity: 1;
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}
</style>
