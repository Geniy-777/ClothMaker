<nav class="header__navigation">
  <ul class="navigation__list-items">
    <li class="list-title">Категории</li>
    <li class="list-item"><button class="button-navigate">Вязаная одежда</button></li>
    <ul class="list-for-item" hidden>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <li class="list-item"><button class="button-navigate">Трикотажная одежда</button></li>
    <ul class="list-for-item" hidden>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <li class="list-item"><button class="button-navigate">Верхняя демисизонная одежда</button></li>
    <ul class="list-for-item" hidden>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <li class="list-item active"><button class="button-navigate">Верхняя зимняя одежда</button></li>
    <ul class="list-for-item">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </ul>
</nav>
<button class="btn-help">
  Нужна помощь?
</button>

<script>
  $('.button-navigate').on('click', function () {
    $(this).parent().toggleClass('active');
    $('.list-item').not($(this).parent()).removeClass('active');
    $(this).parent().next('.list-for-item').toggle();
    $('.list-for-item').not($(this).parent().next('.list-for-item')).hide();
  });
</script>