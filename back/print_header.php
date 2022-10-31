<div class="filters">
  <div class="main-filter">
    <div class="color-bar">
      <label for="select-color" class="title">Цвет</label>
      <input type="color" class="color-selector" value="#FF9E9E" id="select-color">
    </div>

    <div class="filter-container add-print">
      <div class="title">
        <p>Добавьте</p>
      </div>
      <div class="form add-for-cloth" id="add-picture">
        <a href="" class="form add">
          <button class="button-add-print-filter"></button>
          <p class="text">Картинку</p>
        </a>
      </div>
      <div class="form add-for-cloth" id="add-text">
        <a href="" class="form add">
          <button class="button-add-print-filter"></button>
          <p class="text">Текст</p>
        </a>
      </div>
      <div class="form add-for-cloth" id="add-figure">
        <a href="" class="form add">
          <button class="button-add-print-filter"></button>
          <p class="text">Фигуру</p>
        </a>
      </div>
      <div class="form add-for-cloth" id="add-furn">
        <a href="" class="form add">
          <button class="button-add-print-filter"></button>
          <p class="text">Фурнитуру</p>
        </a>
      </div>
    </div>

    <div class="filter-container type-print">
      <div class="title">
        <p>Вид нанесения</p>
      </div>
      <div class="form active type-print-change">
        <a href="" class="form type-print">
          <button class="button-add-print-filter"></button>
          <p class="text">Нет логотипа</p>
        </a>
      </div>
      <div class="form type-print-change">
        <a href="" class="form type-print">
          <button class="button-add-print-filter"></button>
          <p class="text">Вышевка</p>
        </a>
      </div>
      <div class="form type-print-change">
        <a href="" class="form type-print">
          <button class="button-add-print-filter"></button>
          <p class="text">Шифроны</p>
        </a>
      </div>
    </div>
  </div>

  <!--  ДОПОЛНИТЕЛЬНЫЕ ФИЛЬТРЫ      -_--->
  <div class="additional-filter" hidden>

    <!--    ДОПОЛНИТЕЛЬНЫЙ ФИЛЬТР ДЛЯ КАРТИНКИ   -->
    <div class="additional-filter-container add-picture" style="display:none;">
      <div class="add-file">
        <button class="button-add-file">Выберите файл</button>
        <p class="text">Или перетяните файл сюда</p>
      </div>
      <div class="form additional-add-for-cloth" id="filter-picture-animals">
        <a href="" class="form additional-add">
          <button class="button-add-print-filter"></button>
          <p class="text">Животное</p>
        </a>
      </div>
      <div class="form additional-add-for-cloth" id="filter-picture-cars">
        <a href="" class="form additional-add">
          <button class="button-add-print-filter"></button>
          <p class="text">Машины</p>
        </a>
      </div>
      <div class="form additional-add-for-cloth" id="filter-picture-footbal">
        <a href="" class="form additional-add">
          <button class="button-add-print-filter"></button>
          <p class="text">Футбол</p>
        </a>
      </div>
      <div class="form additional-add-for-cloth" id="filter-picture-children">
        <a href="" class="form additional-add">
          <button class="button-add-print-filter"></button>
          <p class="text">Детские</p>
        </a>
      </div>
      <div class="form additional-add-for-cloth" id="filter-picture-games">
        <a href="" class="form additional-add">
          <button class="button-add-print-filter"></button>
          <p class="text">Игры</p>
        </a>
      </div>
      <div class="form additional-add-for-cloth" id="filter-picture-names">
        <a href="" class="form additional-add">
          <button class="button-add-print-filter"></button>
          <p class="text">Имена</p>
        </a>
      </div>
    </div>


    <!--    ДОПОЛНИТЕЛЬНЫЙ ФИЛЬТР ДЛЯ ТЕКСТА     -->
    <div class="additional-filter-container add-text" style="display:none;">
      text
    </div>


    <!--   ДОПОЛНИТЕЛЬНЫ ФИЛЬТР ДЛЯ ФИГУР   -->
    <div class="additional-filter-container add-figure" style="display:none;">
      figure
    </div>


    <!--  ДОПОЛНИТЕЛЬНЫ ФИЛЬТР ДЛЯ ФУРНИТУРЫ    -->
    <div class="additional-filter-container add-furn" style="display:none;">
      furn
    </div>

  </div>
</div>
<script src="scripts/script-print-page.js"></script>