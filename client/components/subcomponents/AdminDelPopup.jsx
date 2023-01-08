import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts, selectProducts } from '../../slices/products'
// import deleteProductImage from the api
import { deleteProduct } from '../../apis/products'

export default function adminDelPopup({ setPopup }) {
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()

  function handleClick(e) {
    e.preventDefault()
    setPopup(false)
  }

  function handleDelete(e) {
    e.preventDefault()

    const deleteItem = products.find((x) => {
      return x.id == e.target.id
    })

    deleteProduct(deleteItem)
    // deleteProductImage(`product${deleteItem.id}.png`)
  }

  useEffect(async () => {
    await dispatch(fetchProducts())
  }, [products])

  return (
    <>
      <div className="delPopup">
        {products.map((product) => (
          <>
            <div className="delProduct">
              <img
                className="delProductImage"
                src={`/images/product${product.id}.png`}
                alt="productPhoto"
              />
              <p>{product.unique_name}</p>
              <form>
                <button type="submit" onClick={handleDelete} id={product.id}>
                  Delete
                </button>
              </form>
            </div>
          </>
        ))}
        <form>
          <button type="submit" onClick={handleClick}>
            close popup
          </button>
        </form>
      </div>
    </>
  )
}
