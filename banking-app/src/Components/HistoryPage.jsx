import React from 'react'

export default function HistoryPage({ index }) {
  let userListLocalStorage = JSON.parse(localStorage.getItem('userListKey'))
  let user = userListLocalStorage[index]
  let userHistory = user.History

  //currency format
  function formatToCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }
  return (
    <>
      <div className='sidebar-margin '>
        <section className='section notifiication'>
          <div className='container '>
            <div class='columns is-multiline '>
              <div class='column notification is-link is-full '>
                <h1 className='title'>
                  <i class='fa-solid fa-receipt'></i> History
                </h1>
              </div>
              <div className='column notification is-link'>
                <h1 className='title'>Transaction History</h1>
                <table className='table is-fullwidth is-striped'>
                  <thead>
                    <th>Date</th>
                    <th>Type</th>

                    <th>Amount</th>
                  </thead>
                  <tbody>
                    {userHistory.length ? (
                      userHistory.map(({ date, type, amount }, index) => {
                        return (
                          <tr key={index}>
                            <td>{date}</td>
                            <th>{type}</th>
                            <th className={type == 'Withdraw' ? 'has-text-danger' : 'has-text-success'}>
                              $ {formatToCurrency(amount)}
                            </th>
                          </tr>
                        )
                      })
                    ) : (
                      <th
                        colSpan='5'
                        className='table-size subtitle'
                        style={{
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        No History
                      </th>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
