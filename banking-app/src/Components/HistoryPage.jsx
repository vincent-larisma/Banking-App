import React, { useState } from 'react'


export default function HistoryPage() {
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
                    <tr>
                      <td>Hello</td>
                      <th>Hello</th>
                      <th>Hello</th>
                    </tr>
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
