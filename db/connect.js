const mongoose=require('mongoose')
const connectionString=

'mongodb+srv://tangaraaymen:Express!2024@nodeexpressproject.8kbuh7h.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProject'

mongoose
.connect(connectionString,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
}
)

.then(()=>console.log('CONNECTED TO THE DB...'))
.catch((err)=>console.log(err))

