<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Card extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['number', 'due_date', 'owner_name', 'cvc', 'type', 'status', 'user_id'];

    public function user(){
        return $this->belongsTo(User::class,'user_id', 'id');
    }
}
