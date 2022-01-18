<template>
  <div id="prop-panel-container">
    <div class="q-pa-md row items-center content-center q-gutter-sm no-wrap">

      <div class="col-6">
      <q-card class="my-card">
        <q-card-section class="bg-primary text-black">
          <div class="text-h6">Pattern Properties</div>
        </q-card-section>

        <q-separator ></q-separator>

        <div class="q-ml-md row">
          <q-select color="purple-12" v-model="model" :options="options" label="Stitch" model-value="Brick"  @update:model-value="stitchEvent(model)">
            <template v-slot:prepend>
              <q-icon name="view_comfy" class="material-icons" />
            </template>
          </q-select>

        </div>

        <div class="q-ml-md row">
          <div class="col">
            <q-input class="intputs" color="purple-12" v-model.number="length" type="number" label="Length" v-on:change="lengthEvent();widthinput(this.size);">
              <template v-slot:prepend>
                <q-icon name="swap_vertical_circle" class="material-icons" />
              </template>
            </q-input>
          </div>
          <div class="q-ml-md q-mr-md col">
            <q-input class="intputs" input-class="text-right" color="purple-12" v-model="lengthCm" readonly>
            </q-input>
          </div>
        </div>

        <div class="q-ml-md row">
          <div class="col">
            <q-input class="intputs" color="purple-12" v-model.number="width" type="number" label="Width" v-on:change="widthEvent(); widthinput(this.size);">
              <template v-slot:prepend>
                <q-icon name="swap_horizontal_circle" class="material-icons" />
              </template>
            </q-input>
          </div>
          <div class="q-ml-md q-mr-md col">
            <q-input class="intputs" input-class="text-right" color="purple-12" v-model="widthCm" label="" :dense="dense" readonly>
              <template v-slot:prepend>
                <q-icon/>
              </template>
            </q-input>
          </div>
        </div>
      </q-card>
      </div>

      <div class="col-3">
        <q-card class="my-card">
          <q-card-section class="bg-primary text-black">
            <div class="text-h6">Bead Size</div>
          </q-card-section>

          <q-separator ></q-separator>

          <div class="q-pa-md row justify-center">
            <q-select color="purple-12" v-model="size" emit-value :options="sizeOptions" label="Size"  model-value='11/0' @update:model-value="widthinput(size)">
              <template v-slot:prepend>
                <q-icon name="auto_awesome" class="material-icons" />
              </template>
            </q-select>
          </div>
          <div class="q-pa-md row ">
            <q-btn id="fill" icon="format_color_fill" label="Fill Template" />
          </div>
        </q-card>
      </div>

      <div class="col-3">
        <q-card class="my-card">
          <q-card-section class="bg-primary text-black">
            <div class="text-h6">Color</div>
          </q-card-section>

          <q-separator ></q-separator>

          <div class="q-pa-md row justify-center items-center">
            <input type="color" class="form-control form-control-color h-75" id="exampleColorInput" title="Choose your color" value="#000002">
          </div>
        </q-card>
      </div>
    <q-separator></q-separator>

  </div></div>

</template>

<script>

import {ref} from 'vue'
import Template from "@/components/Template";

let lenghtTemp = Template.data().length
let widthTemp = Template.data().width

let sizemap = new Map();
sizemap.set("6/0", 0.4)
sizemap.set("7/0", 0.35)
sizemap.set("8/0", 0.3)
sizemap.set("9/0", 0.26)
sizemap.set("10/0", 0.24)
sizemap.set("11/0", 0.22)
sizemap.set("12/0", 0.2)
sizemap.set("15/0", 0.15)



export default {
  name: 'PropPanel',
  methods: {
    widthEvent () {
      this.eventBus.emit("WIDTH_CHANGED",this.width)
    },
    lengthEvent () {
      this.eventBus.emit("LENGTH_CHANGED", this.length)
    },
    stitchEvent (model) {
      this.eventBus.emit("STITCH_CHANGED", model)
    },
    widthinput(size){
      this.widthCm = this.width * sizemap.get(size) + "cm"
      this.lengthCm = this.length * sizemap.get(size) + "cm"
    }
  },

  setup () {

    return {
      model: ref(null),
      options: [
        'Brick', 'Square'
      ],
      size: ref('11/0'),
      sizeOptions: [
        '6/0','7/0','8/0','9/0','10/0','11/0','12/0','15/0'
      ],
      length: ref(lenghtTemp),
      lengthCm: ref("4.4cm"),
      width: ref(widthTemp),
      widthCm: ref("4.4cm"),

      hex: ref('#FF00FF')
    }
  }
}

</script>

<style>
#prop-panel-container {
  height: 100%;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  font-family: Arial, serif;
  font-weight: normal;
  text-align: center;
}
.my-card {
  height: 1vh;

}

.intputs{

}

#exampleColorInput {

}



</style>