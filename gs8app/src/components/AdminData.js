import React from 'react';
import Button from '@material-ui/core/Button';
import api from '../api/index';
import { useTable } from 'react-table'

class AdminData extends React.Component {
    constructor() {
        super();
        this.state = {
            tags: [],
            columns: [],
            isLoading: false,
        }
    }


    getTags = async () => {
        console.log('clicked getTags');
        this.setState({ isLoading: true })

        await api.getTags().then(result => {
            this.setState({
                tags: result.data.data,
                isLoading: false,
            })
        })
    }

    Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

    render() {
        //const classes = this.useStyles();
        const { isLoading, tags } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Tag',
                accessor: 'tag',
                filterable: true,
            }
        ]

        let showTable = true
        if (!tags.length) {
            showTable = false
        }

        return (
            <div>
                <h1>DB Test Page</h1>     
                <Button variant="contained"
                    onClick={this.getTags}
                >ShowTags</Button>
                {showTable && (
                    <this.Table
                        data={tags}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </div>
        );
    }
};

export default AdminData;