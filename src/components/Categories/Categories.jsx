import React from "react";
import category1 from '../../assets/jason-mowry.jpg';
import category2 from '../../assets/melanie-van.jpg';
import category3 from '../../assets/breakreate.jpg';
import category4 from '../../assets/fengyou-wan.jpg';
import category5 from '../../assets/mel-elias.jpg';
import category6 from '../../assets/ann-fossa.jpg';


const Categories = () => {
 
  return (
    <main>
        <div class="b-overlay-wrap position-relative">
            <div class="categories-page w-100">
                <h1 class="categories-title">Categories</h1> 
                <div class="categories-container">
                    <a href="/categories/1" class="category d-flex align-items-end justify-content-center" style={{backgroundImage:'url('+category1+')'}}>
                        <div class="category-title">DJS</div>
                    </a>
                    <a href="/categories/3" class="category d-flex align-items-end justify-content-center" style={{backgroundImage:'url('+category2+')'}}>
                        <div class="category-title">Musicians</div>
                    </a>
                    <a href="/categories/4" class="category d-flex align-items-end justify-content-center" style={{backgroundImage:'url('+category3+')'}}>
                        <div class="category-title">Dancers</div>
                    </a>
                    <a href="/categories/5" class="category d-flex align-items-end justify-content-center" style={{backgroundImage:'url('+category4+')'}}>
                        <div class="category-title">Magicians</div>
                    </a>
                    <a href="/categories/6" class="category d-flex align-items-end justify-content-center" style={{backgroundImage:'url('+category5+')'}}>
                        <div class="category-title">Stand-Up Comedy</div>
                    </a>
                    <a href="/categories/7" class="category d-flex align-items-end justify-content-center" style={{backgroundImage:'url('+category6+')'}}>
                        <div class="category-title">Alternative Acts</div>
                    </a>
                </div>
            </div>
        </div>
    </main>
  );
};

export default Categories;