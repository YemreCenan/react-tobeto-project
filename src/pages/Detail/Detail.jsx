import React from "react";
import "./Detail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { Item } from "semantic-ui-react";
function Detail({ data }) {
  const { productId } = useParams();

  if (!data || !data.products) {
    return <p>Ürünler Yükleniyor......</p>;
  }

  const product = data.products.find((Item) => String(Item.id) === productId);

  const { title, description, price, stock, thumbnail, brand, category } =
    product;

  return (
    <div className="Detail">
      <header class="section-header">
        <section class="header-main border-bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-2 col-4">{title}</div>
              <div class="col-lg-6 col-sm-12">
                <form action="#" class="search">
                  <div class="input-group w-100">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit">
                        Search
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="widgets-wrap float-md-right">
                  <div class="widget-header  mr-3">
                    <a href="#" class="icon icon-sm rounded-circle border">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                    <span class="badge badge-pill badge-danger notify">0</span>
                  </div>
                  <div class="widget-header icontext">
                    <a href="#" class="icon icon-sm rounded-circle border">
                      <i class="fa fa-user"></i>
                    </a>
                    <div class="text">
                      <span class="text-muted">Welcome!</span>
                      <div>
                        <a href="#">Sign in</a> |<a href="#"> Register</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section class="section-content padding-y bg">
        <div class="container">
          <article class="card">
            <div class="card-body">
              <div class="row">
                <aside class="col-md-6">
                  <article class="gallery-wrap">
                    <a href="#">
                      {" "}
                      <img src={thumbnail} />
                    </a>
                  </article>
                </aside>
                <main class="col-md-6">
                  <article>
                    <a href="#" class="text-primary btn-link">
                      {category}
                    </a>
                    <h3 class="title">{title}</h3>
                    <div>
                    
                      <span class="label-rating mr-3 text-muted">{stock}</span>
                      <a href="#" class="btn-link  mr-3 text-muted">
                        {" "}
                        <i class="fa fa-heart"></i> Stock Quantity {" "}
                      </a>
                     
                    </div>

                    <hr />

                    <div class="mb-3">
                      <h6>{description}</h6>
                      <ul class="list-dots mb-0">
                        <li>Made in Russia</li>
                        <li>Wolf leather </li>
                        <li>Rubber material bottom</li>
                        <li>Dark blue color</li>
                      </ul>
                    </div>

                    <div class="form-group">
                      <label class="text-muted">Available sizes</label>
                      <div>
                        <label class="js-check btn btn-check active mr-1">
                          <input
                            type="radio"
                            name="option_size"
                            value="option1"
                            checked=""
                          />
                          <span>Small</span>
                        </label>
                        <label class="js-check btn btn-check mr-1">
                          <input
                            type="radio"
                            name="option_size"
                            value="option1"
                          />
                          <span>Medium</span>
                        </label>
                        <label class="js-check btn btn-check mr-1">
                          <input
                            type="radio"
                            name="option_size"
                            value="option1"
                          />
                          <span>Large</span>
                        </label>
                        <label class="js-check btn btn-check disabled">
                          <input
                            type="radio"
                            name="option_size"
                            disabled=""
                            value="option1"
                          />
                          <span>Babies</span>
                        </label>
                      </div>
                    </div>

                    <div class="mb-3">
                      <var class="price h4">{price}</var> <br />
                      <span class="monthly">
                        $32.00 / monthly{" "}
                        <a href="#" class="btn-link">
                          installment{" "}
                        </a>
                      </span>
                    </div>

                    <div class="mb-4">
                      <a href="#" class="btn btn-primary mr-1">
                        Buy now
                      </a>
                      <a href="#" class="btn btn-light">
                        Add to card
                      </a>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </article>
          <article class="card mt-5"></article>
        </div>
      </section>
    </div>
  );
}

export default Detail;
