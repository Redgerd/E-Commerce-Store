"use strict";(self.webpackChunke_commerce_store=self.webpackChunke_commerce_store||[]).push([[787],{787:(e,r,s)=>{s.r(r),s.d(r,{default:()=>g});var c=s(43),i=s(216),t=s(475),o=s(574),n=s(629),a=s(517),l=s(247),d=s(579);const p=o.Ay.section`
  display: flex;
  align-items: center;
  justify-content: center;

  article {
    padding: 1.5rem 1rem;
    background: #fff;
    display: grid;
    justify-items: center;
    gap: 2rem;

    ${l.A.lg`
      grid-template-columns: 1fr 1fr 1fr;
    `}

    .product__img {
      img {
        max-width: 20rem;
        object-fit: contain;
      }
    }

    .product__info {
      display: grid;
      gap: 1rem;

      ${l.A.lg`
        grid-column: 2/4;
      `}

      button {
        width: max-content;
      }

      .info__price {
        color: var(--green-color-1);
        span {
          color: var(--red-color-1);
        }
      }

      .info__category {
        color: var(--green-color-1);
        span {
          color: var(--gray-color-1);
        }
      }
    }
  }
`,g=()=>{const e=(0,i.Zp)(),{id:r}=(0,i.g)(),{single_product:s,single_product_loading:o,single_product_error:l,fetchSingleProduct:g}=(0,n.v)();if((0,c.useEffect)((()=>{g(r)}),[r]),(0,c.useEffect)((()=>{l&&setTimeout((()=>{e("/")}),3e3)}),[l,e]),o)return(0,d.jsx)("div",{className:"page-w-b",children:(0,d.jsx)(a.Rh,{})});if(l)return(0,d.jsx)("div",{className:"page-w-b",children:(0,d.jsx)(a.$D,{})});if(!s)return(0,d.jsx)("div",{className:"page-w-b",children:(0,d.jsx)(a.$D,{message:"Product not found"})});const{title:m,price:u,image:f,category:j,description:x,rating:_}=s;return(0,d.jsxs)("main",{children:[(0,d.jsx)(a.Qp,{title:m,products:!0}),(0,d.jsx)(p,{className:"page",children:(0,d.jsxs)("article",{children:[(0,d.jsx)("div",{className:"product__img",children:(0,d.jsx)("img",{src:f,alt:m})}),(0,d.jsxs)("div",{className:"product__info",children:[(0,d.jsx)(a.$n,{variant:"secondary",children:(0,d.jsx)(t.N_,{to:"/products",children:"back to products"})}),(0,d.jsx)(a.o5.H2,{children:m}),(0,d.jsx)(a.A8,{stars:_}),(0,d.jsxs)(a.o5.P,{className:"info__price",children:["Price: ",(0,d.jsxs)("span",{children:["$",u]})]}),(0,d.jsxs)(a.o5.P,{className:"info__category",children:["Category: ",(0,d.jsx)("span",{children:j})]}),(0,d.jsx)(a.o5.P,{children:x}),(0,d.jsx)(a.pj,{product:s})]})]})})]})}}}]);
//# sourceMappingURL=787.f6ac163a.chunk.js.map