import { Link } from "react-router-dom";


export default function NotFound() {
        return (
                <div>

                        <h1>No Page Found</h1>
                        <Link to="/">
                                Home Page
                        </Link>
                </div>
        )
}
