import { useAuth } from 'hooks';

const styles = {
    container: {
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
        color: "#004f10"
    },
    spanName: {
        fontWeight: 700,
        fontSize: 63,
        textAlign: 'center',
        color: "#7d0000"
    },
    spanWith: {
        fontWeight: 500,
        fontSize: 24,
    },
};




export default function Home() {
    const { user } = useAuth();
    console.log("user", user); //!

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                <span style={styles.spanName} role="img" aria-label="Greeting icon">
                    💁 {user.name} <br />
                </span>
                Welcome to the HW-8
                <span style={styles.spanWith}>
                    &nbsp;(with createAsyncThunk)
                </span>
            </h1>
        </div>
    );
}
