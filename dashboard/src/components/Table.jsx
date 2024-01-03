
export function Table({ tableHead,children }) {
    return (


        <>
            <table className="w-full z-0 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {tableHead.map((item, index) => (
                            <th scope="col" key={index} className="px-6 py-3">
                                {item.name}
                            </th>
                        ))}
                    </tr>
                </thead>
               {children}
            </table>

        </>



    )
}
