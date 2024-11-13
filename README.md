Задание: Создание Landing Page

## 1 задача
В файле index.html подключите стили из файлов styles/app.css и styles/default.css. Убедитесь, что заголовок страницы задан как Landing Page.

## 2 задача
В теле документа создайте следующую структуру:

Добавьте верхний блок с классом header, который будет включать:

Логотип с изображением из assets/logo.png, имеющий класс logo.
Навигацию с классом navigation. Навигация должна включать маркированный список и три пункта списка. Каждый пункт списка должен содержать ссылку. Текст: "Home," "Features," и "Contact." 

Главную часть страницы (main) разделите на две секции(section):

Левая секция с классом left-block:

Картинку продукта из assets/product.jpg с классом product-image.
Описание продукта с классом product-description и параграф: "Our product is the best solution for your needs. It provides everything you need to succeed."
Правая секция с классом right-block:

Заголовок с текстом "Key Features."
Список из трех элементов, где каждый включает иконку и параграф:
Первая иконка из assets/phone-50.png и параграф "Description of feature 1."
Вторая иконка из assets/price-50.png и параграф "Description of feature 2."
Третья иконка из assets/delivery-50.png и параграф "Description of feature 3."

Создайте футер с классом footer, добавьте внутрь параграф с символом копирайта и текстом  "2024 Company Name. All rights reserved".

## 3 задача

В файле styles/app.css добавьте стили для каждого элемента по описанию:git

Основное расположение страницы:

Укажите для body  вертикального расположение элементов, используя Flexbox, так чтобы блоки располагались друг под другом и равномерно распределялись по высоте страницы, при этом верхний элемент должен быть прижат к верхнему краю родительского контейнера, а нижний -  к нижнему.

Header и Footer:

Установите фоновый цвет #f0d3af, ширину на весь экран и белый цвет текста для header и footer:

Навигация (используйте селектор .navigation ul li a и соответствующий псевдокласс):
Добавьте эффект при наведении, меняющий цвет текста ссылок на #9c6436:

Footer:
Задайте тексту в footer расположение по центру. 
