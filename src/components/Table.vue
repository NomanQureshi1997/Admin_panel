<template>
  <div>
    <b-table striped hover :items="getdata" :fields="fields">
      <template #cell(avatar)>
        <img
          :src="require('../assets/avatar.png')"
          height="40px"
          width="40px"
          class="rounded-circle"
        />
      </template>
      <template #cell(Modify)="row">
        <a href="#"
          ><b-icon icon="pencil-fill" v-on:click="Edit(row.index)"></b-icon
        ></a>
        <span> / </span>
        <a href="#"
          ><b-icon
            icon="trash"
            v-on:click="onSubmit(row.index)"
            style="color: red"
          ></b-icon
        ></a>
      </template>
    </b-table>
    <b-modal v-model="modalShow" id="modal-center">
      <UpdateUser :data="getdata" :index="index" />
    </b-modal>
  </div>
</template>

<script>
import UpdateUser from "@/components/UpdateUser.vue";
export default {
  name: "tables",

  components: {
    UpdateUser,
  },
  data() {
    return {
      modalShow: false,
      fields: ["avatar", "Name", "Email", "jobtitle", "Modify"],
      getdata: JSON.parse(localStorage.getItem("Userdata")),
      index: "",
    };
  },

  methods: {
    onSubmit(index) {
      this.getdata.splice(index, index + 1);
      localStorage.setItem("Userdata", JSON.stringify(this.getdata));
    },

    Edit(ind) {
      this.modalShow = true;
      this.index = ind;
    },
  },
};
</script>
