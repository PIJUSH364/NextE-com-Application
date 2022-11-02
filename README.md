Deploy : >> vercel env value
         >> NEXT_PUBLIC_ANALYTICS_ID

6.  list of product
    i) add data.js
    ii)add images
    iii) render products
7.  Create Product Deatils
    i)create product page
    ii)create 3 columns
    iii)show image in first column
    iv)show product info in secind column
    v)show add to card action on third column
    vi)add styles

N.B: npm i -D @types/react===>when routing use

8. Handle Add to card
   i)define react context
   ii)define cart items state
   iii) create add to card action
   iv)add reducer
   v)create store provider
   vi)handle add to cart button

9. Create Cart Page

   1. create cart.js
   2. use context to get cart items
   3. list items in cart items
   4. redirect to cart screen after add to cart

10. Update Quanity In The Cart

    1. add select box for quantity
    2. handle select box change

11. Save Cart Items
    1. install js-cookie package
        >>in that store file imprt ==> import Cookies from 'js-cookie';
        >>set up cookies on this file
        >>next setup cart page convrt dynamic ssr =false
        >>simiarlly change layout page use useeffect ,whent cartitem value change 
    2. save and retreive cart items in cookies
    
12. Create Login Form
    1. install react hook form
    2. create input boxes
    3. add login button

 13. Connect To MongoDB
    1. install mongoose
    2. install mongodb or use mongodb atlas
    3. save connection url in .env file
    4. create db utils file
    5. create sample users