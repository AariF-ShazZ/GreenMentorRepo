import React from 'react'

const Table = ({ data }) => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">SUPPLIER</th>
                        <th scope="col">YEAR</th>
                        <th scope="col">EMISSION/REVENUE RATIO</th>
                        <th scope="col">MOM</th>
                    </tr>
                </thead>
                <tbody>

                    {data.slice(0, 5).map((output, index) => (
                        <tr key={index}>                           
                            <td scope="row">{output.Supplier}</td>
                            <td>{output.Year}</td>
                            <td>{output.email}</td>
                            <td>{output.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table