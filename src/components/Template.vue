<template>
  <div class="templateContainer" id="temp">
    <div class="template">
      <template v-if="beads.stitch === 'Brick'">
        <div v-for="(n, i) in beads.length" :key="n">
          <template v-if="i % 2 != 0" class="house size" :id="i">
                            <span class="beadEMPTY">
                                <button class="emptyBead"></button>
                            </span>
          </template>
          <template v-for="(q, col) in beads.width" :key="q">
            <span class="bead1" :id="col">
            <input type="button" class="bead" v-bind:id="'beadR'+i+'C'+col">
            </span>
          </template>
        </div>
      </template>
      <template v-else>
        <div v-for="(n, i) in beads.length" :key="n">
          <template v-for="(q, col) in beads.width" :key="q">
            <input type="button" class="bead" v-bind:id="'beadR'+i+'C'+col">
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>

import $ from 'jquery'

class Grd {
  constructor(length,width,stitch) {
    this.length = length;
    this.width = width;
    this.stitch = stitch;
    this.beadValue = Array.from(Array(length), () => new Array(width));
  }
  fill(json){
    let index = 0;
    for(let row=0; row<this.length; row++){
      for(let col=0; col<this.width; col++){
        this.beadValue[row][col] = (json[index].bead.color);
        index++
      }
    }
  }
}

let grid = new Grd(20,20,'Brick')

function updateGrid(grid) {
  console.log("Updating Template")
  for (let row=0; row<grid.length; row++){
    for(let col=0; col<grid.width; col++){
      let bead = grid.beadValue[row][col]
      $("#beadR"+row+"C"+col).css('background-color', rgbToHex(bead.r,bead.g,bead.b))
    }
  }
  console.log(grid)
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function registerClickListener() {
  for (let row=0; row<grid.length; row++) {
    for(let col=0; col<grid.width; col++) {
      $("#beadR"+row+"C"+col).click(function() {setBead(row,col)});
    }
  }
  $("#fill").click(function (){fillTemplate()})
}

function fillTemplate(){
  console.log("Setting Template to ");
  for (let row=0; row <grid.length; row++) {
    for(let col=0; col<grid.width; col++){
      setBead(row,col)
    }
  }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function setBead(row,col) {
  let hex = document.getElementById("exampleColorInput").value
  let color = hexToRgb(hex)
  console.log("Setting bead (" + row + "/" + col + ")" + " to rgb: " + color.r + "/" + color.g + "/" + color.b );
  grid.beadValue[row][col] = color;
  $("#beadR"+row+"C"+col).css('background-color',hex);
}

function loadJson() {
  $.getJSON("http://localhost:9000/json", function (data){

    console.log('DATA:',data)
    grid = new Grd(data.temp.length,data.temp.width,data.temp.stitch)
    grid.fill(data.temp.beads)
    updateGrid(grid);
    console.log('GRID',grid);
    registerClickListener();
    return grid
  })
}

loadJson()




export default {
  name: 'Template',
  data: function () {
    /*class Grd {
      constructor(length,width,stitch) {
        this.length = length;
        this.width = width;
        this.stitch = stitch;
        this.beadValue = Array.from(Array(length), () => new Array(width));
      }
      fill(json){
        let index = 0;
        for(let row=0; row<this.length; row++){
          for(let col=0; col<this.width; col++){
            this.beadValue[row][col] = (json[index].bead.color);
            index++
          }
        }
      }
    }

    let grid = new Grd(20,20,'Brick')

    $.getJSON("http://localhost:9000/json", function (data){

      console.log('DATA:',data)
      grid = new Grd(data.temp.length,data.temp.width,data.temp.stitch)
      grid.fill(data.temp.beads)
      updateGrid(grid);
      console.log('GRID',grid);
      registerClickListener();
    })*/

    loadJson()

    return{beads:grid}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media (min-width: 400px) {

  .bead {
    width: 0.75em;
    height: 1.125em;
    font-size: 10px;
    margin: 0;
    display: inline-flex;
    border: 1px solid #404040;
  }

  .emptyBead {
    width: 0.75em;
    height: 1.125em;
    margin: 0;
    display: inline-flex;
    font-size: 10px;
    background-color: transparent;
    border: none;
    overflow: hidden;
    outline: none;
  }
}

@media (min-width: 480px) {

  .bead {
    width: 1.5em;
    height: 1em;
    font-size: 10px;
    margin: 0;
    display: inline-flex;
    border: 1px solid #404040;
  }

  .emptyBead {
    width: 1.5em;
    height: 1em;
    margin: 0;
    display: inline-flex;
    font-size: 10px;
    background-color: transparent;
    border: none;
    overflow: hidden;
    outline: none;
  }
}

@media (min-width: 800px) {

  .bead {
    width: 2.25em;
    height: 1.5em;
    font-size: 10px;
    margin: 0;
    display: inline-flex;
    border: 1px solid #404040;
  }

  .emptyBead {
    width: 2.25em;
    height: 1.5em;
    margin: 0;
    display: inline-flex;
    font-size: 10px;
    background-color: transparent;
    border: none;
    overflow: hidden;
    outline: none;
  }
}

@media (min-width: 1000px) {

  .bead {
    width: 3em;
    height: 2em;
    font-size: 10px;
    margin: 0;
    display: inline-flex;
    border: 1px solid #404040;
  }

  .emptyBead {
    width: 3em;
    height: 2em;
    margin: 0;
    display: inline-flex;
    font-size: 10px;
    background-color: transparent;
    border: none;
    overflow: hidden;
    outline: none;
  }
}

.templateContainer {
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
</style>
