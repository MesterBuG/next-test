export default function Users({ data }) {

    return <>
        {data.map(user => (<a key={user.id} href={'/Users/' + user.login} >
            <img src={user.avatar_url} alt=''
            style={{ display: 'inline-block', width: 100 }} />
            </a>))
        }
    </>
}


export async function getServerSideProps(context) {
    let res = await fetch('https://api.github.com/users');
    let data = await res.json();
    return {
        props: { data, }, // will be passed to the page component as props
    }
}