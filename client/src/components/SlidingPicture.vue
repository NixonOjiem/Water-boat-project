<template>
  <div class="z-[9999] bg-white">
    <section class="image-slider-section py-4">
      <div class="image-slider-container" :style="sliderTransform">
        <img v-for="(image, index) in extendedPictureSlides" :key="index" :src="image" alt="Sliding image"
          class="slider-image" />
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
      numImagesPerRow: 3,
      duplicateCount: 3,
      slideInterval: null,
      autoSlideDelay: 3000,
      shouldTransition: true,
    }
  },
  computed: {
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
    this.shouldTransition = true;
    this.startSlideShow();
    this.internalImageIndex = this.duplicateCount;
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
  },
  methods: {
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
  /* Set the width of the entire slider section to 70% */
  width: 80%;
  /* Center the slider horizontally */
  margin: 0 auto;

}

.image-slider-container {
  display: flex;
  height: 100%;
  /* Make the container fill the 70% width of its parent (.image-slider-section) */
  width: 100%;
  /* Transition is handled dynamically in `sliderTransform` */
  border-radius: 30px;
}

.slider-image {
  /* Each image takes a portion of the container's width,
     so that 'numImagesPerRow' images are visible at a time. */
  width: calc((100% / 3) - 10px);
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 10px;
  margin-right: 10px;
}

/* Remove margin from the last image in the visible set to avoid extra space */
.slider-image:last-child {
  margin-right: 0;
}

/* Navigation Arrows Styling */
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
