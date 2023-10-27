import React from "react";
import ProductsImg from "../assets/prs.png";
import BlinImg from "../assets/blin.png";
import MilkImg from "../assets/mlk.png";
import MapImg from "../assets/map.png";
import StatImg from "../assets/stat.png";

export default function Home() {
  return (
    <div>
      <div className="first-pg">
        <div className="container">
          <img src={ProductsImg} alt="" />
          <h1 className="free-del">Доставка бесплатно от 1000 ₽</h1>
        </div>
      </div>
      <div className="container">
        <div className="sales-pg">
          <div className="t-part">
            <h1 className="ttl-h1">Акции</h1>
            <a href="/all">Все продукты {">"} </a>
          </div>
          <div className="hm-row">
            <div class="hm-card">
              <img src={BlinImg} alt="" />
              <h3>44,50 ₽</h3>
              <p>Г/Ц Блинчики с мясом вес, Россия</p>
              <button>В корзину</button>
            </div>
            <div class="hm-card">
              <img src={BlinImg} alt="" />
              <h3>44,50 ₽</h3>
              <p>Г/Ц Блинчики с мясом вес, Россия</p>
              <button>В корзину</button>
            </div>
            <div class="hm-card">
              <img src={BlinImg} alt="" />
              <h3>44,50 ₽</h3>
              <p>Г/Ц Блинчики с мясом вес, Россия</p>
              <button>В корзину</button>
            </div>
            <div class="hm-card">
              <img src={BlinImg} alt="" />
              <h3>44,50 ₽</h3>
              <p>Г/Ц Блинчики с мясом вес, Россия</p>
              <button>В корзину</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="new-pg">
          <div className="t-part">
            <h1 className="ttl-h1">Новинки</h1>
            <a href="/all">Все продукты {">"} </a>
          </div>
          <div className="hm-row">
            <div class="hm-card">
              <img src={BlinImg} alt="" />
              <h3>44,50 ₽</h3>
              <p>Г/Ц Блинчики с мясом вес, Россия</p>
              <button>В корзину</button>
            </div>
            <div class="hm-card">
              <img src={BlinImg} alt="" />
              <h3>44,50 ₽</h3>
              <p>Г/Ц Блинчики с мясом вес, Россия</p>
              <button>В корзину</button>
            </div>
            <div class="hm-card">
              <img src={BlinImg} alt="" />
              <h3>44,50 ₽</h3>
              <p>Г/Ц Блинчики с мясом вес, Россия</p>
              <button>В корзину</button>
            </div>
            <div class="hm-card">
              <img src={BlinImg} alt="" />
              <h3>44,50 ₽</h3>
              <p>Г/Ц Блинчики с мясом вес, Россия</p>
              <button>В корзину</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="recently-pg">
          <div className="t-part">
            <h1 className="ttl-h1">Покупали раньше</h1>
            <a href="/all">Все продукты {">"} </a>
          </div>
          <div className="hm-row">
            <div class="hm-card">
              <img src={BlinImg} alt="" />
              <h3>44,50 ₽</h3>
              <p>Г/Ц Блинчики с мясом вес, Россия</p>
              <button>В корзину</button>
            </div>
            <div class="hm-card">
              <img src={BlinImg} alt="" />
              <h3>44,50 ₽</h3>
              <p>Г/Ц Блинчики с мясом вес, Россия</p>
              <button>В корзину</button>
            </div>
            <div class="hm-card">
              <img src={BlinImg} alt="" />
              <h3>44,50 ₽</h3>
              <p>Г/Ц Блинчики с мясом вес, Россия</p>
              <button>В корзину</button>
            </div>
            <div class="hm-card">
              <img src={BlinImg} alt="" />
              <h3>44,50 ₽</h3>
              <p>Г/Ц Блинчики с мясом вес, Россия</p>
              <button>В корзину</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="special-pg">
          <h1 className="ttl-h1">Специальные предложения</h1>
          <div className="sp-row">
            <div className="sp-card">
              <div className="sp-txt">
                <h2>Покупайте акционные товары</h2>
                <p>И получайте вдвое больше бонусов</p>
              </div>
              <img src={MilkImg} alt="" />
            </div>
            <div className="sp-card">
              <div className="sp-txt">
                <h2>Покупайте акционные товары</h2>
                <p>И получайте вдвое больше бонусов</p>
              </div>
              <img src={MilkImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="shop-pg">
          <h1 className="ttl-h1 our-m-h1">Наши магазины</h1>
          <div className="our-btns">
            <button>п.Щельяюр</button>
            <button>д.Вертеп</button>
            <button>с.Краснобор</button>
            <button>д.Диюр</button>
          </div>
          <img src={MapImg} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="article-pg">
          <div className="t-part">
            <h1 className="ttl-h1">Статьи</h1>
            <a href="/all">Все продукты {">"} </a>
          </div>
          <div className="art-row">
            <div className="art-card">
              <img src={StatImg} alt="" />
              <h2>
                Режим использования масок и перчаток на территории магазинов
              </h2>
              <p>
                Подробная информация o режимах использования масок и перчаток на
                территории магазинов "ЛЕНТА". Информация обновляется каждый
                будний день.
              </p>
              <button>Подробнее</button>
            </div>
            <div className="art-card">
              <img src={StatImg} alt="" />
              <h2>
                Режим использования масок и перчаток на территории магазинов
              </h2>
              <p>
                Подробная информация o режимах использования масок и перчаток на
                территории магазинов "ЛЕНТА". Информация обновляется каждый
                будний день.
              </p>
              <button>Подробнее</button>
            </div>
            <div className="art-card">
              <img src={StatImg} alt="" />
              <h2>
                Режим использования масок и перчаток на территории магазинов
              </h2>
              <p>
                Подробная информация o режимах использования масок и перчаток на
                территории магазинов "ЛЕНТА". Информация обновляется каждый
                будний день.
              </p>
              <button>Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
