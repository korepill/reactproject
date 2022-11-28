import React from "react";
import '../style/personcard.css'
import Plus from '../assets/vectors/plus.png'

const CharacterCard1 = ({hero,AddFavoritePosts}) =>
{
    const ThisCard = () =>
    {
        const NewPost = {
            hero
        }
        AddFavoritePosts(NewPost)
    }
    return(
        <div className='LongCard'style={{marginBottom:'30px',display : 'flex', width: '1170px',height: '164px',background: '#FFFFFF',border: '1px dashed rgba(162, 162, 162, 0.6)',borderRadius: '5px'}}>
            <div>
                <img src={hero.image} alt="" />
            </div>
            <div>
                <div style={{width:'977px',justifyContent:'space-between',display: 'flex',margin:'14px 15px 8px 15px', alignItems: 'center'}}>
                    <h2 style={{ margin: '0px',fontStyle: 'normal',fontWeight: '700', fontSize: '20px',lineHeight: '24px'}}>{hero.name}</h2>
                    <div style={{display: 'flex', alignItems: 'center',height: '17px'}}>
                        <img style={{marginRight: '6px'}} src={hero.pointer} alt="" />
                        <div style={{fontstyle: 'normal',fontWeight: '500',fontSize: '14px',lineHeight: '17px'}}>{hero.state}</div>
                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{marginRight:'12.88px',fontStyle: 'normal',fontWeight: '400',fontSize: '12px',lineHeight: '15px',color: '#1F4766', marginLeft: '15px'}}>
                        <p style={{margin: '0px',marginBottom:'7px'}}>Раса:</p>
                        <p style={{margin: '0px', marginBottom:'6px'}}>Место происхождение:</p>
                        <p style={{margin: '0px'}}>Последняя локация:</p>
                    </div>
                    <div style={{width:'163px',marginRight:'28px',fontStyle: 'normal',fontWeight: '500',fontSize: '14px',lineHeight: '17px',color: '#000000'}}>
                        <p style={{margin: '0px', marginBottom:'6px'}}>{hero.race}</p>
                        <p style={{margin: '0px', marginBottom:'5px'}}>{hero.origin}</p>
                        <p style={{margin: '0px'}}>{hero.lastlocashion}</p>
                    </div>
                    <div style={{marginRight:'12.88px',fontStyle: 'normal',fontWeight: '400',fontSize: '12px',lineHeight: '15px',color: '#1F4766', marginLeft: '15px'}}>
                        <p style={{margin: '0px', marginBottom:'9px'}}>Пол</p>
                        <p style={{margin: '0px'}}>Эпизоды</p>
                    </div>
                    <div style={{marginRight:'18px',fontStyle: 'normal',fontWeight: '500',fontSize: '14px',lineHeight: '17px',color: '#000000'}}>
                        <p style={{margin: '0px', marginBottom:'9px'}}>{hero.gender}</p>
                        <p style={{margin: '0px'}}>{hero.episodes}</p>
                    </div>
                </div>
            </div>
            <div onClick={()=>ThisCard()} className="AddIcon">
                <div className="Icon"></div>
                <img className="Plus" src={Plus} alt="" />
            </div>
        </div>
    )
}

export default CharacterCard1;