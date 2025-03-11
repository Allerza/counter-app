function Table(props){
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                </tr>
            </thead>

            <tbody>
                
                 {
                    props.data.map((favLink, index)=>{
                     return(<tr key={index}>
                        <td>{favLink.name}</td>
                        <td>{favLink.URL}</td>

                    </tr>)
                    })
                    
                    }
            </tbody>
        </table>

    )

}

export default Table