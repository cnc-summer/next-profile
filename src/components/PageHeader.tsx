export default function PageHeader({ header } : { header: string }) {
    return (
        <div className="container mx-auto mb-10 mt-10 lg:mt-20 ">
            <h1 className="text-5xl font-bold text-yellow-500">{ header }</h1>
            <div className="border-b-[7px] border-b-white w-10 mt-2"></div>
        </div>
    );
}