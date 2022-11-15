import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import './ProductInfo.css'
import clayful from 'clayful/client-js'
import { Alert } from 'react-bootstrap'

function ProductInfos({ detail }) {
  const [count, setCount] = useState(1)
  const [show, setShow] = useState(false)
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleQuantityClick = (type) => {
    if (type === 'plus') {
      setCount(prev => prev + 1)
    } else {
      if (count === 1) return;
      setCount(prev => prev - 1)
    }
  }

  const handleActionClick = (type) => {
    if (!isAuth) {
      alert('면저 로그인 해 주세요')
      navigate('/login')
      return
    }

    let Cart = clayful.Cart;
    let payload = {
      product: detail._id,
      variant: detail.variants[0]._id,
      quantity: count,
      shippingMethod: detail.shipping.methods[0]._id
    };
    let options = {
      customer: localStorage.getItem('accessToken')
    }

    Cart.addItemForMe(payload, options, function (err, result) {
      if (err) {
        console.log(err)
        return
      }

      if (type === 'cart') {
        setShow(true);
        setTimeout(() => {
          setShow(false)
        }, 3000)
      } else {
        setTimeout(() => {
          navigate('/user/cart')
        }, 1000)
      }

    })
  }

  if (!detail) return;
  return (
    <div>
      {show && (
        <Alert variant='info'>
        <Alert.Heading>상품을 장바구니에 담았습니다.</Alert.Heading>
        </Alert>
      )}
      <p style={{ color: '#bf4800', marginBottom: 0}}>New</p>
      <h1 style={{ marginBottom: 20 }}> {detail.name} 구입하기</h1>
      <h5>
        {detail.summary} 개벽 판매 가격 {detail.price?.original.formatted}
      </h5>
      <div className="quantity">
        <p style={{ fontWeight: 600, marginBottom: 5 }}>수량</p>
        <button onClick={() => handleQuantityClick('plus')} className='plus-btn' type='button' name='button'>+</button>
        <input type="text" readOnly name='number' value={count} />
        <button onClick={() => handleQuantityClick('minus')} className='minus-btn' type='button' name='button'>-</button>
      </div>
      <br />
      <br />
      <h3>총 상품 금액: {detail.price?.original.raw * count}원</h3>
      <br />
      <div onClick={() => handleActionClick('cart')} className="product-info-action">장바구니</div>
      <div onClick={() => handleActionClick('pay')} className="product-info-action">바로 구매</div>
    </div>
  )
}

export default ProductInfos
