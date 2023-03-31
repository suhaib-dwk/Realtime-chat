import {PrettyChatWindow} from 'react-chat-engine-pretty'

export const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh'}}> 
      <PrettyChatWindow 
        projectId='30136635-193f-46df-b4e6-724ea3948afc'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
      />
    </div>
  )
}
