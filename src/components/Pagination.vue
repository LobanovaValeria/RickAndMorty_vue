<template>
  <div class="pagination">
    <button @click="changePage(1)" :disabled="currentPage === 1">First</button>
    <button @click="goToPrevPage" :disabled="currentPage === 1">←</button>
    <button v-for="pageNumber in displayedPageNumbers" :key="pageNumber">
      <button @click="changePage(pageNumber)" :class="{ active: pageNumber === currentPage }">
        {{ pageNumber }}
      </button>
    </button>
    <button @click="goToNextPage" :disabled="currentPage === totalPage">→</button>
    <button @click="changePage(totalPage)" :disabled="currentPage === totalPage">Last</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      maxDisplayedPages: 5,
      page: 1,
    };
  },

  props: {
    totalPage: Number,
    currentPage: Number,
  },
  watch: {
    currentPage(newValue) {
      this.$emit('ChangePage', this.currentPage);
    },
  },
  computed: {
    displayedPageNumbers() {
      const pageCount = this.totalPage;
      const currentPage = this.currentPage;
      const maxDisplayedPages = this.maxDisplayedPages;
      let startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
      let endPage = Math.min(pageCount, startPage + maxDisplayedPages - 1);

      if (endPage - startPage + 1 < maxDisplayedPages) {
        startPage = Math.max(1, endPage - maxDisplayedPages + 1);
      }

      return Array.from({ length: endPage - startPage + 1 }, (v, k) => k + startPage);
    },
  },
  methods: {
    goToPrevPage() {
      if (this.currentPage > 1) {
        this.page = this.currentPage - 1;
        this.$emit('changePageNumber', this.page);
      }
    },
    goToNextPage() {
      if (this.currentPage < this.totalPage) {
        this.page = this.currentPage + 1;
        this.$emit('changePageNumber', this.page);
      }
    },
    changePage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPage) {
        this.page = +pageNumber;
        this.$emit('changePageNumber', this.page);
      }
    },
  },
};
</script>
<style>
.pagination {
  display: flex;
  gap: 10px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgb(39, 43, 51);
}
</style>
