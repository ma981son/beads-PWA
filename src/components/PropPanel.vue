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
            <q-input class="intputs" color="purple-12" v-model.number="length" type="number" label="Length" v-on:change="lengthEvent">
              <template v-slot:prepend>
                <q-icon name="swap_vertical_circle" class="material-icons" />
              </template>
            </q-input>
          </div>
          <div class="q-ml-md q-mr-md col">
            <q-input class="intputs" input-class="text-right" color="purple-12" v-model="lengthCm" label="" :dense="dense" readonly>
            </q-input>
          </div>
        </div>

        <div class="q-ml-md row">
          <div class="col">
            <q-input class="intputs" color="purple-12" v-model.number="width" type="number" label="Width" v-on:change="emitEvent">
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
            <q-select color="purple-12" v-model="size" :options="sizeOptions" label="Size" model-value='11/0'>
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

let lenghtTemp = 20
let widthTemp = 20

export default {
  name: 'PropPanel',
  methods: {
    emitEvent () {
      this.eventBus.emit("WIDTH_CHANGED",this.width)
    },
    lengthEvent () {
      this.eventBus.emit("LENGTH_CHANGED", this.length)
    },
    stitchEvent (model) {
      this.eventBus.emit("STITCH_CHANGED", model)
    }
  },
  setup () {
    return {
      model: ref(null),
      options: [
        'Brick', 'Square'
      ],
      length: ref(lenghtTemp),
      lengthCm: ref("4.4cm"),
      width: ref(widthTemp),
      widthCm: ref("4.4cm"),
      size: ref('11/0'),
      sizeOptions: [
          '6/0','7/0','8/0','9/0','10/0','11/0','12/0','15/0'
      ],
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
  margin: 16px 0;
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