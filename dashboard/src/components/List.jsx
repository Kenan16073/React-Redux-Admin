import { Table } from "./Table";
import { Loading } from "./Loading"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testApi } from "../store/product/productSlice";
import { useProductsDeleteMutation, useProductsGetQuery } from "../store/product/productApi"

export function List() {

  const { data, isLoading, isError } = useProductsGetQuery();
  const [deleteData, request] = useProductsDeleteMutation();
  const [selectId, setSelectId] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [check,setCheck] = useState('')
  const dispatch = useDispatch()
  const { viewProducts, loading } = useSelector((state) => state.productsSlice);

  function Delete(id) {
    deleteData(id)
    setSelectId(id)
  }

  function openModal(id) {
    setShowModal(true)
    dispatch(testApi(id))
  }

  function changeStatus(e){
    e.preventDefault()
    setCheck()
  }

  let content;

  if (isLoading) {
    content =
      <>
        <tbody>
          <tr >
            <td colSpan={6}>
              <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex  justify-evenly">
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex  justify-evenly">
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex  justify-evenly">
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex  justify-evenly">
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex  justify-evenly">
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex  justify-evenly">
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex  justify-evenly">
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex  justify-evenly">
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              <div role="status" className="w-[100%] p-6  border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                <div className="flex  justify-evenly">
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="w-48  h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            </td>
          </tr>
        </tbody>
      </>
  } else if (isError) {
    content = 'Error'
  } else {
    let productsArr = data !== null ? Object.entries(data) : []
    content =
      <tbody>
        {productsArr.length >= 1 ?
          productsArr.map((item, index) => (

            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item[0]}
              </th>
              <td className="px-6 py-4">
                {item[1].title}
              </td>
              <td className="px-6 py-4">
                {item[1].price}
              </td>
              <td className="px-6 py-4">
                {item[1].brand}
              </td>
              <td className="px-6 py-4">
                {item[1].status ? (<input onClick={()=>changeStatus} id="chec" checked='checked' type="checkbox" />) : (<input onClick={()=>changeStatus} id="chec" type="checkbox" />)}
              </td>
              <td className="flex justify-evenly py-4">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => openModal(item[0])}  >Views</button>
                <button onClick={() => { Delete(item[0]) }} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">{request.isLoading && selectId === item[0] ? <Loading /> : 'Delete'}</button>
              </td>
            </tr>

          )) : (
            <tr>
              <td colSpan={6}>
                <h1 className="text-center text-2xl">Dont Product</h1>
              </td>
            </tr>
          )
        }
      </tbody>


  }

  const tableHead = [
    {
      name: 'Id'
    },
    {
      name: 'Title'
    },
    {
      name: 'Price'
    },
    {
      name: 'Brand'
    },
    {
      name: 'Status'
    },
    {
      name: 'Options'
    },
  ]



  return (
    <>
      <div className="mt-[80px] ">
        <h1 className="text-center  text-3xl"> Product List</h1>
        <div className="h-screen  relative overflow-x-auto mt-8">
          <Table tableHead={tableHead}>
            {content}
          </Table>

        </div>
      </div>


      {showModal ? (
        <>

          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            {
              loading ? (<Loading />) : <div className="relative w-auto  mx-auto max-w-2xl">
                <div className=" dark:bg-gray-800 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className=" text-3xl font-semibold">
                      {viewProducts.title}
                    </h3>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <img className="h-80 w-max mx-auto max-w-lg rounded-lg" src={viewProducts.link} alt="" />
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      {viewProducts.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>


              </div>
            }

          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>


      ) : null}





    </>
  )
}