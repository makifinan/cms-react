import React from 'react'
import { Dropdown, Feed } from 'semantic-ui-react'


export default function Notification() {
  return (
    <div>
      <Dropdown icon={'bell'} item >
        <Dropdown.Menu>
          <Dropdown.Item>


            <Feed>

              <Feed.Event>
                <Feed.Label icon="bell" />
                <Feed.Content>
                  <Feed.Date content='3 days ago' />
                  <Feed.Summary>
                    Bir görev tanımlandı
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              </Feed>
          </Dropdown.Item>
          <Dropdown.Item>
          <Feed>
          <Feed.Event>
                <Feed.Label icon="bell" />
                <Feed.Content>
                  <Feed.Date content='4 days ago' />
                  <Feed.Summary>
                    Bir görev tanımlandı
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>

    </div>
  )
}
