export default function User({user}) {
    return <>
    <img src={user.avatar_url} alt='' style={{width:400}}/><br/>
    Name : <b>{user.name}</b><br/>
    Email : <b>{user.email}</b><br/>
    Company : <b>{user.company}</b>
    </>
}

export async function getServerSideProps(context) {
    let res = await fetch('https://api.github.com/users/' + context.params.myname);
    let user = await res.json();
    return {
        props: {user}, // will be passed to the page component as props
    }
}