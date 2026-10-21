import addItem from '..//assets/addItem.png'

export function NavBar(){
    return(
        <>
        <div id="navBarctnr" className="w-full h-13 grid grid-cols-1 md:grid-cols-[33%_34%_33%]">
            <div id="leftCtnr" className="flex bg-amber-100 gap-2 items-center px-4">
                <div id="imgctnr">
                    <img src={addItem} className='w-11 h-11' />
                </div>
                <div id="titlesCtnr" className="flex flex-col">
                    <h2>Add New Asset</h2>
                    <p className=''>Lets add an assest to your inventory</p>
                </div>
            </div>
        </div> 

        <div id="midctnr" className='bg-amber-800'>

        </div>   

        <div id="rightctnr" className='bg-green-300'>

        </div>
        </>
    )
}