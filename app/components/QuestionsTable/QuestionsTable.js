import React, { PropTypes } from 'react'

import IconButton from 'material-ui/IconButton'
import EditIcon from 'material-ui/svg-icons/content/create'

function QuestionsTable ({ tableClassname, labels, questions, handleEdit }) {
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
          (questions || []).map((question, q) => (
            <tr key={`question-${q}`}>
              {
                labels.map((label, l) => (
                  <td key={`label-${l}`}>
                    {
                      label.prop.split(',').map(item => question[item]).join(' ')
                    }
                  </td>
                ))
              }
              <td>
                <IconButton onClick={() => handleEdit(question.id)}>
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

QuestionsTable.propTypes = {
  tableClassname: PropTypes.string,
  labels: PropTypes.array,
  questions: PropTypes.array,
  handleEdit: PropTypes.func
}

export default QuestionsTable
