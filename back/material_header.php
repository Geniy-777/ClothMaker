<?php
// db connect ...

?>

<div class="filter-container material-density">
  <!--
  <input id="density-btn-1" type="radio" class="btn-radio">
  <label for="density-btn-1" class="text">$value</label>
  -->
  <div class="title">
    <p>Плотность материала</p>
  </div>
  <div class="form">
    <a href="" class="form radio-btn-standart density" id="big-density">
      <button class="button-add-print-filter"></button>
      <p class="text">Плотная (более 300гр/м2)</p>
    </a>
  </div>
  <div class="form">
    <a href="" class="form radio-btn-standart density" id="medium-density">
      <button class="button-add-print-filter"></button>
      <p class="text">Средняя (более 150-300гр/м2)</p>
    </a>
  </div>
  <div class="form">
    <a href="" class="form radio-btn-standart density" id="low-density">
      <button class="button-add-print-filter"></button>
      <p class="text">Легкая (менее 150гр/м2)</p>
    </a>
  </div>
</div>

<div class="filter-container type-cloth">
  <div class="title">
    <p>Тип полотна</p>
  </div>
  <div class="form">
    <a href="" class="form radio-btn-standart type-cloth" id="vyaz-type-cloth">
      <button class="button-add-print-filter"></button>
      <p class="text">Вязанное полотно</p>
    </a>
  </div>
  <div class="form">
    <a href="" class="form radio-btn-standart type-cloth" id="netkan-type-cloth">
      <button class="button-add-print-filter"></button>
      <p class="text">Нетканное полотно</p>
    </a>
  </div>
  <div class="form">
    <a href="" class="form radio-btn-standart type-cloth" id="tkan-type-cloth">
      <button class="button-add-print-filter"></button>
      <p class="text">Тканное полотно</p>
    </a>
  </div>
</div>

<div class="filter-container function-cloth">
  <div class="title">
    <p>Назначение ткани</p>
  </div>
  <div class="form">
    <a href="" class="form radio-btn-standart function-cloth" id="top-sloy-function">
      <button class="button-add-print-filter"></button>
      <p class="text">Верхний слой</p>
    </a>
  </div>
  <div class="form">
    <a href="" class="form radio-btn-standart function-cloth" id="costume-function">
      <button class="button-add-print-filter"></button>
      <p class="text">Костюмная</p>
    </a>
  </div>
  <div class="form">
    <a href="" class="form radio-btn-standart function-cloth" id="plate-function">
      <button class="button-add-print-filter"></button>
      <p class="text">Плательная</p>
    </a>
  </div>
</div>

<div class="filter-container material-properties">
  <div class="title">
    <p>Свойства материала</p>
  </div>

  <div class="form">
    <a href="" class="form radio-btn-standart properties-cloth" id="low-density">
      <button class="button-add-print-filter"></button>
      <p class="text">Материал небольшой плотности (лёгкий)</p>
    </a>
  </div>
  <div class="form">
    <a href="" class="form radio-btn-standart properties-cloth" id="breath-cloth">
      <button class="button-add-print-filter"></button>
      <p class="text">Дышащий материал</p>
    </a>
  </div>
  <div class="form">
    <a href="" class="form radio-btn-standart properties-cloth" id="waterfck-cloth">
      <button class="button-add-print-filter"></button>
      <p class="text">Водоотталкивающая пропитка</p>
    </a>
  </div>
  <div class="form">
    <a href="" class="form radio-btn-standart properties-cloth" id="low-sminaemost-cloth">
      <button class="button-add-print-filter"></button>
      <p class="text">Низкая сминаемость</p>
    </a>
  </div>
</div>
<script src="scripts/script-material-page.js"></script>