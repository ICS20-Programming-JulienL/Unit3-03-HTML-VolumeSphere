// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: April 3 2023
// This file contains the JS functions for index.html, Unit3-03-HTML-VolumeSphere

"use strict";

function calculateVolumeSphere() {
  // get the radius from user input
  let radius= parseFloat(document.getElementById("sphere-radius").value)

  //calculate the volume 
  let volume = 4/3*Math.PI*radius**3

  // display the volume 
  document.getElementById('answer1').innerHTML = "The volume of your sphere is " +volume.toFixed(2)+"cm<sup>3</sup>.";
}

