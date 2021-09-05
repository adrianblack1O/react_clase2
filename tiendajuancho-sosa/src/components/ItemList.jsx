import { React, useState, useEffect } from 'react'
import { allProdu, itemCat } from '../fbase/firebase'
import Producto from './Item'

function Categorias ({catego}) {

	const [ products, setProducts ] = useState([])
	const [ cargando, setCargando ] = useState(true)
	
	useEffect(()=>{
		if(catego != null){
			const items = itemCat(catego)
      items.then((data) => {
        const itemsAux = []
        data.forEach(item => {
          itemsAux.push({ id:item.id,
                          produ:item.data().produ, 
                          precio:item.data().precio, 
                          imagenURL:item.data().imagenURL, 
                          stock:item.data().stock, 
                          descripcion:item.data().descripcion, 
                          categoria:item.data().categoria
                        });
        })
        setProducts(itemsAux)
        setCargando(false)
      })
		} else {
		const items = allProdu()
		items.then((data) => {
		const itemsAux = []
		data.forEach(item => {
			itemsAux.push({ id:item.id,
                      produ:item.data().produ, 
                      precio:item.data().precio, 
                      imagenURL:item.data().imagenURL, 
                      stock:item.data().stock, 
                      descripcion:item.data().descripcion, 
                      categoria:item.data().categoria
                    });
		})
    setProducts(itemsAux)
    setCargando(false)
  })
}
},[catego])

  return (
    <>
    {cargando===true &&
    <div className="white-text">Cargando</div>
    }
    <div className="row center-align">
      {cargando===true &&
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      }
      <div className="valign-wrappwer left-align">
          {cargando===false &&
          <h3>Listado de productos</h3>
          }
        </div>
      <div>
					{products.map(producto => 
								<Producto key={producto.id}
								id={producto.id}
								produ={producto.produ}
								precio={producto.precio}
								imagenURL={producto.imagenURL}
								stock={producto.stock}
								/>)}
				</div>
    </div>
    </>
  )
}

export default Categorias;