$(function(){
    $('.tombolTambahData').on('click',function(){
        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
        const id = $(this).data('id');
        
        $.ajax({
            url : 'http://localhost/BelajarPHPMVC/public/mahasiswa/getubah',
            data : {id : id},
            method : 'post',
            dataType : 'json',
            success : function(){
                 $('#nama').val('');
                 $('#nim').val('');
                 $('#email').val('');
                 $('#jurusan').val('');
                }  
           });
    });

    $('.tampilModalUbah').on('click',function(){
        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action','http://localhost/BelajarPHPMVC/public/mahasiswa/ubah');
        const id = $(this).data('id');
        
        $.ajax({
            url : 'http://localhost/BelajarPHPMVC/public/mahasiswa/getubah',
            data : {id : id},
            method : 'post',
            dataType : 'json',
            success : function(data){
                console.log('ok');
                 $('#nama').val(data.nama);
                 $('#nim').val(data.nim);
                 $('#email').val(data.email);
                 $('#jurusan').val(data.jurusan);
                 $('#id').val(data.id);
              
            }
        });
    });
});
