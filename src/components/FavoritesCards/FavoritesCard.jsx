import React from "react";
import Cross from '../../assets/vectors/cross.png'
import '../../style/favorites.css'


const FavoritesCard = ({favorite,remove}) =>
{
    return(
        <div className="ShortCard" style={{marginBottom:'30px',display : 'flex', width: '570px',height: '164px',background: '#FFFFFF',border: '1px dashed rgba(162, 162, 162, 0.6)',borderRadius: '5px'}}>
            <div>
                <img src={favorite.image} alt="" />
            </div>
            <div>
                <div style={{width:'376px',justifyContent:'space-between',display: 'flex',margin:'14px 15px 8px 15px', alignItems: 'center'}}>
                    <h2 style={{ margin: '0px',fontStyle: 'normal',fontWeight: '700', fontSize: '20px',lineHeight: '24px'}}>{favorite.name}</h2>
                    <div style={{display: 'flex', alignItems: 'center',height: '17px'}}>
                        <img style={{marginRight: '6px'}} src={favorite.pointer} alt="" />
                        <div style={{fontstyle: 'normal',fontWeight: '500',fontSize: '14px',lineHeight: '17px'}}>{favorite.state}</div>
                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{marginRight:'12.88px',fontStyle: 'normal',fontWeight: '400',fontSize: '12px',lineHeight: '15px',color: '#1F4766', marginLeft: '15px'}}>
                        <p style={{margin: '0px',marginBottom:'7px'}}>Раса:</p>
                        <p style={{margin: '0px', marginBottom:'6px'}}>Место происхождение:</p>
                        <p style={{margin: '0px'}}>Последняя локация:</p>
                    </div>
                    <div style={{marginRight:'18px',fontStyle: 'normal',fontWeight: '500',fontSize: '14px',lineHeight: '17px',color: '#000000'}}>
                        <p style={{margin: '0px', marginBottom:'6px'}}>{favorite.race}</p>
                        <p style={{margin: '0px', marginBottom:'5px'}}>{favorite.origin}</p>
                        <p style={{margin: '0px'}}>{favorite.lastlocashion}</p>
                    </div>
                </div>
            </div>
            <div onClick = {()=> remove(favorite)} className="DelIcon">
                <div className="Icon1"></div>
                <img className="Cross" src={Cross} alt="" />
            </div>
        </div>
    )
}

export default FavoritesCard;