<template>
  <div class="container">
    <sub-header />
    <content :characters="characters" :totalPage="totalPage" @queryParameters="onFilter" :isLoading="isLoading"/>
    <pagination v-if="totalPage>1" :totalPage="totalPage" @changePageNumber="onChangePage" :currentPage="currentPage"/>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination';
import SubHeader from '@/components/SubHeader';
import Content from '@/components/Content';
import axios from 'axios';
export default {
  components: {
    Content,
    SubHeader,
    Pagination,
  },
  data() {
    return {
      characters: [],
      isLoading: false,
      totalPage: 1,
      currentPage:1,
      queryName: "",
      queryStatus: "",
    };
  },
  
  methods: {
    onChangePage(page){
            console.log(page)

      this.currentPage=page;
      this.fetchCharacters(page);
    },
    onFilter(name, status){
      this.queryName=name;
      this.queryStatus=status;
      this.fetchCharacters(1 ,this.queryName, this.queryStatus);
    },
    async fetchCharacters(page, name, status) {
      console.log(page, name);
      let qPage=page===undefined?this.changePage:page;
      let qName=name===undefined?"":name;
      let qStatus=status===undefined?"":status;
      try {
        this.isLoading=true;
        const response= await axios({
          method: "POST",
          url: "https://rickandmortyapi.com/graphql",
          data: {
            query:`{
              characters (page:${qPage}, filter: {name: "${this.queryName}", status: "${this.queryStatus}"})  {
                info {
                pages
                }
                results {
                id
                name
                status
                species
                origin {
                name
                }
                location {
                name
                }
                image
                }
              }
            }`
          }
        });
        this.characters=response.data.data.characters.results;
        this.totalPage=response.data.data.characters.info.pages;
        
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading=false;
        
      }
    },
  },
  mounted() {
    this.fetchCharacters(this.currentPage);
  },
};
</script>
<style>
* {
  margin: 0;
}
body{
  overflow: hidden;
}

h1 {
  font-size: 6rem;
  margin-block-start: 0;
  margin-block-end: 0;
}

.container {
  font-size: 18px;
  color: #fff;
}

@media (max-width: 55em) {
  h1 {
    font-size: 4.5rem;
  }
  form {
    flex-direction: column;
    width: 30rem;
    margin: 0 auto;
  }
  form > button {
    align-self: flex-end;
  }
}


</style>
