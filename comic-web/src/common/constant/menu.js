import {categories} from './categories';
const MENU = [
    {parents: 'Trang chủ'},
    {
        parents: 'Thể loại',
        children: categories
    },
    {
        parents: 'Quốc gia',
        children: [{country: 'Nhật Bản'},
                    {country: 'Việt Nam'},
                    {country: 'Mỹ'},
                    {country: 'Trung Quốc'}
                    ]
    },
    {
        parents: 'BXH'
    }

]

export {MENU};