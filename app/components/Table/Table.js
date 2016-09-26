import React, { PropTypes } from 'react'

import IconButton from 'material-ui/IconButton'
import EditIcon from 'material-ui/svg-icons/content/create'

function Table ({ tableClassname, labels, items, handleEdit }) {
  return (
    <table className={tableClassname}>
      <thead>
        <tr>
          {
            labels.map((label, i) => (
              <th key={`th-${i}`}>
                {label.text}
              </th>
            ))
          }
          <td></td>
        </tr>
      </thead>
      <tbody>
        {
          (items || []).map((item, q) => (
            <tr key={`item-${q}`}>
              {
                labels.map((label, l) => (
                  <td key={`label-${l}`}>
                    {
                      label.prop.split(',').map(l => item[l]).join(' ')
                    }
                  </td>
                ))
              }
              <td>
                <IconButton onClick={() => handleEdit(item.id)}>
                  <EditIcon />
                </IconButton>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

Table.propTypes = {
  tableClassname: PropTypes.string,
  labels: PropTypes.array,
  items: PropTypes.array,
  handleEdit: PropTypes.func
}

export default Table
