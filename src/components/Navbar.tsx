import { AiFillGithub } from "react-icons/ai";

export const Navbar = () => (
    <div className="container-fluid py-5 border-b-2">
        <div className="container mx-auto px-5 md:px-0">
            <div className="grid grid-cols-2">
                <div className="text-xl font-semibold">PassPills</div>
                <a className="text-3xl justify-self-end hover:text-slate-500 transition duration-300 hover:-translate-y-1 hover:scale-110" href="https://github.com/susyabashti/passpills"><AiFillGithub /></a>
            </div>
        </div>
    </div>
);