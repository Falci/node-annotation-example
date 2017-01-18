import {JsonController, Param, Body, Get, Post, Put, Delete} from "routing-controllers";

@JsonController("/users")
export class UserController {

    @Get("")
    getAll() {
       return [
         {id: 1, name: 'Fernando'},
         {id: 2, name: 'Falci'}
       ];
    }

    @Get("/:id")
    getOne(@Param("id") id: number) {
       return {
         id: id,
         name: 'Falci'
       };
    }

    @Post("")
    post(@Body() user: any) {
       return user;
    }

    @Put("/:id")
    put(@Param("id") id: number, @Body() user: any) {
       return user;
    }

    @Delete("/:id")
    remove(@Param("id") id: number) {
       return {};
    }

}
