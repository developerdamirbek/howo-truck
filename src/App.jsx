import logo from './assets/images/logo.png'
import telegramIcon from './assets/icons/telegram.svg'
import gear from './assets/images/gear.gif'
import { PhoneIcon } from './assets/icons/phone-icon'

function App() {

  return (
    <>
      <header className="  py-5 border-b">
        <div className="container">
          <nav className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
              <a className='w-[90px] h-[90px] max-sm:w-[50px] max-sm:h-[50px] inline-block ' href="">
                <img className=' object-cover ' src={logo} alt="" />
              </a>
              <div className='flex flex-col'>
                <h1 className=' text-[#006B7A] font-bold text-[30px] max-sm:text-[20px] max-sm:leading-6 leading-10 '>TRUCK</h1>
                <h1 className=' text-[#006B7A] font-bold text-[30px] max-sm:text-[20px] max-sm:leading-6 leading-10 '>HOWO</h1>
              </div>
            </div>
            <a className='flex items-center gap-3 py-3 px-6 max-sm:py-2 max-sm:px-4 rounded-lg border-2 text-[#34AADF] border-[#34AADF]' href="https://t.me/TRUCKHOWO">
              Telegram
              <img className='' src={telegramIcon} alt="Howo truck telegram icon" />
            </a>
          </nav>
        </div>
      </header>
      <main>
        <section className='py-[60px]'>
          <h2 className='text-center max-w-[500px] ml-auto mr-auto mb-[30px]'>Assalomu alaykum! Saytda texnik ishlar olib borilyotgani sababli vaqtinchalik ish faoliyatida emas!</h2>
          <div className="container">
            <div className='flex items-center justify-center mb-10'>
              <img className='w-[200px] max-sm:w-[90px]' src={gear} alt="" />
            </div>
            <h2 className='mb-7 text-center '>Admin bilan bog'lanish:</h2>
            <div className='flex items-center justify-center mb-5'>
              <a className='py-3 px-6 bg-[#34AADF] rounded-lg text-white ml-auto mr-auto text-center ' href="https://t.me/TRUCKHOWO_ADMIN">
                ADMIN
              </a>
            </div>
            <div className=' flex flex-col gap-4 items-center justify-center'>
              <div className='flex items-center gap-2'>
                <PhoneIcon/>
                <a className='text-[#34AADF]' href="tel:+998917704334">+99891-770-43-34</a>
              </div>
              <div className='flex items-center gap-2'>
                <PhoneIcon/>
                <a className='text-[#34AADF]' href="tel:+998900212211">+99890-021-22-11</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
