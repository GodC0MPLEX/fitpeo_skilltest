import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='upper'>
            <h4>Product Sell</h4>
            <div className='newContainer'>
            <input placeholder='🔍 search' />
            <h6>Last 30 days ⬇️</h6>
            </div>
        </div>
        <table  cellSpacing='10px'>
            <tr>
                <th className='col_1 col'>Product Name</th>
                <th className='col'>Stock</th>
                <th className='col'>Price</th>
                <th className='col'>Total Sale</th>
                <hr />
            </tr>
            <tr>
                <td className='newCol'>
                                        <img src='data:image/jpeg;base64,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'/>
                    <div className='content'>
                    <h4>Abstract 3D</h4>
                    <p>Lorem ipsum dolor sit amet......</p>
                    </div>
                </td>
                <td>32 in stock</td>
                <td> $ 45.99</td>
                <td> 20</td>
            </tr>

            <tr>
                <td className='newCol'>
                    <img src='https://media.istockphoto.com/id/512058550/photo/earth-view-from-space-to-europe.webp?b=1&s=170667a&w=0&k=20&c=KdoCvyLyZVHcY5_kmIiHYaXdey8C4LhsbBnXBwusZUg=' />
                    <div className='content'>
                    <h4>Sarphens Illustrations</h4>
                    <p>Lorem ipsum dolor sit amet......</p>
                    </div>
                </td>
                <td>32 in stock</td>
                <td> $ 45.99</td>
                <td> 20</td>
            </tr>
        </table>
      
    </div>
  )
}

export default Footer
