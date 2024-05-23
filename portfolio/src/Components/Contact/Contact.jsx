import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='cont'>
      <div className="ti">Contact Details</div>
      <div className="details">
        {/* <p className='n'>HIMA MADHU</p> */}

        <div className="ph">
          <div>
            <img className='ph-img' src='https://i.pinimg.com/564x/fb/1c/8d/fb1c8de0e2580670969e105b376f6573.jpg' alt='' />
          </div>
          <div >
            <p><a style={{textDecoration:"none",color:"rgb(161, 178, 201)"}} href="tel:+971558653293">UAE - +971 558653293</a></p>
            <p><a style={{textDecoration:"none",color:"rgb(161, 178, 201)"}} href="tel:+919497638117">IND - +91 9497638117</a></p>
            <p><a style={{textDecoration:"none",color:"rgb(161, 178, 201)"}} href="https://wa.me/919497638117">WhatsApp - +91 9497638117</a></p>
          </div>
        </div>

        <p className='email'>
          <img className='img-email' src='https://w7.pngwing.com/pngs/799/918/png-transparent-mail-google-gmail-google-s-logo-icon-thumbnail.png'
            alt='' />
          <a href="mailto:himamadhu0409@gmail.com">himamadhu0409@gmail.com</a></p>
        <p className='linkedIn'>
          <img className='img-ln' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAAAD///9cXFxJSUl6enr4+Pjg4OC2traysrKUlJRUVFTs7OwJCQktLS1kZGTDw8PMzMyCgoITExNubm5zc3MhISE+Pj40NDSKiorPz8/m5uZmZmaSkpJXV1cQEBA5OTmlpaUkJCSenp5GRkY1jBjhAAADsUlEQVR4nO3db1uqMBiAcXYKlBAENTUrM/v+3/H4r9LEbemztnHd96vzImW/o8KYl5Coo+q8KgdJ3A3KKq+PUcnXv4rG9+AEa4pz4dz3oIRrfgizke8RibfMjoVD38Nx0vBb2E3ggbgVZr5H4qzsIOzeZ/Cz0V7Ytb3ocfOtsPA9CqcVG2GXDvTnNRuh7zE4TiW17yE4rk5y30NwXJ5UvofguCopfQ/BcWUS+/mgqa77iIiIiIiIiIiIiIiIiIiIiIiIiIiIiDqbSjWpf76HJ5DShjCGEMYfwvhDGH8I4w9h/CGMP4TxhzD+EMYfwvhDGH/dXxEmIiKiP+/xbTp79D0IN43Gq3rxNRtMs+Fq0qVr5o17RdusN63nnVBO6jbdZ4t1gG/a0evDpc7+dtbXn7xsewruIpZ3lwf78y+fzL7dCzn2ArnYZWF68ndTS9+2bOoJ05qlsGfv27byg2nNSjj5nW/TwtEuZ51rWs+uFQ5/Ddx050So32brKoZZOGs9/JlzsmjiQlhd59t0frgJUnh/NVCp9xiEtwBdXCpfXPh8C1CpfvDC6W1ABx9FaWF6q3ARuPCq4+Bp90ELb9rLHJLe2YgKZRI+0QhQ+NR5ofBhP0Sh7K05QhTK3qfKsbAYvlQfu/tOvT80fdtTjmiE6dn55dRiYUoJ703dCdPWQ/fIZvFGdHLqTHhxlLn5saIfRFdCzRttbn50BMJX3TbNq3Ct60NBCSf6jRpPQCR3NU6EPcNGjUuNksd8F8K07VEnmQ6Mpv8i30LzK2Da2UhOvl0Ib96s6DmiA6HN/V0Nx33z+9yr0GYZwvQ2DVto8w3Lm8BzeBPafYYMh0TB7/flhXY3zzR8ED9CFq6stms4jdLO+nwL7dY7X/RP8hyy0O5LwLH+SQQnpvJCu/OCB/2TGKbufoV22y31TyK4tO9LaNgwQp9C2yllvELb04J4hbbfcCIMV2i71okQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBHGJhx0XDhILH9JG62wTCwvIS0u/KtflFSJ5cUzerqGrT84nvX6l+utLYXaDffMvwPOE7ufVMdbncheMCu8VKIa32NwWrMROrhgbUAVG2GnX8S52grV0vc4nLVUe6Hs9QdDKjsIra6FE2O7a/nu5wzdJO4vVnyYFWUj38MRb5mpY6FSc98jEq75hH3PbIsuHTWa7yu9nczd67wqLc8Xg21QVvnJXYf+A2UlQ5tpFxuVAAAAAElFTkSuQmCC'
            alt='' />
          <a href="https://www.linkedin.com/in/hima-madhu-89ba3b236/">Hima Madhu</a></p>
          <p className='github'>
          <img className='img-gt' src='data:image/png;base64,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'
            alt='' />
          <a href="https://github.com/himammadhu">himammadhu</a></p>
      </div>

    </div>


  )
}

export default Contact
